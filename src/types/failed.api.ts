import { StatusApi } from "./status.api";
import { MessageApi } from "./message.api";

export interface FailedApi {
  status: StatusApi.Fail;
  data: {
    message: MessageApi;
  };
}
