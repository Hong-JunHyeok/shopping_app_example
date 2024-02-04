// useAsync.ts
import { useEffect, useReducer } from "react";

type StateType<TData> = {
  loading: boolean;
  data: null | TData;
  error: null | any;
};

type ActionType = Partial<{
  payload: any;
  error: any;
  type: string;
}>;

type Options = {
  initialRequest?: boolean;
};

const INTIAL_OPTIONS: Options = {
  initialRequest: true,
};

function reducerFunction<TData>(state: StateType<TData>, action: ActionType) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.payload,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const useAsync = <TData = any, TError = any>(
  callback: (...args: any[]) => Promise<TData>,
  options = INTIAL_OPTIONS
) => {
  const [state, dispatch] = useReducer(reducerFunction, {
    loading: false,
    data: null,
    error: null,
  });

  const fetchData = async (...args: any) => {
    dispatch({ type: "LOADING" });
    try {
      const data = await callback(...args);
      dispatch({ type: "SUCCESS", payload: data });
      return data;
    } catch (error) {
      dispatch({ type: "ERROR", error });
      throw error;
    }
  };

  useEffect(() => {
    if (options.initialRequest) {
      fetchData();
    }
  }, [options.initialRequest]);

  return {
    data: state.data as TData,
    error: state.error as TError,
    loading: state.loading,
    request: fetchData,
  };
};

export default useAsync;
