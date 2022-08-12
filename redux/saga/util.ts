import { put } from "redux-saga/effects";
import { call } from "typed-redux-saga";
// import Config from "react-native-config";
// import 'dotenv/config'


export const sendRequest = async (url: string, method: any = "GET", body: any = null, headers: any = {}) => {

  try {
    console.log(`${process.env.REACT_APP_URL}${url}`)
    const response: any = await fetch(
      `${process.env.REACT_APP_URL}${url}`,
      { method, body, headers }
    );
    
    const responseData: any = await response.json();
    if (!response.ok) {throw new Error(responseData.message);}

    return responseData;

  } catch (err) { throw err; }
  
};

export function* loadAndCall(func: any, startLoad: any, finishLoad: any, type: any, payload: any, isServer: any) {
  try {

    if (startLoad.type === "START_ACTION" ||
        startLoad.type === "REFRESH_ACTION_START") 
          yield put(startLoad);
    else 
      yield put({ type: startLoad });
    
    
    const fetched = isServer
      ? JSON.parse(yield call(func, payload))
      : yield* call(func, payload);
    
    yield put({ type: type, results: fetched });
  }
  catch (err) {}
  finally {

    if (finishLoad.type === "STOP_ACTION" ||
        finishLoad.type === "REFRESH_ACTION_STOP") 
          yield put(finishLoad);
    else 
      yield put({ type: finishLoad });
  }
}
