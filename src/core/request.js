import { name } from "./config";
import { stringifyUrl } from "query-string";

const getToken = () => {
  const ls = localStorage.getItem(`${name}`);
  return `token ${JSON.parse(ls)?.Store?.user?.token}`;
};

const getFormHeaders = () => {
  return {
    Accept: "application/json",
    Authorization: getToken(),
  };
};

const getHeaders = () => {
  return {
    Accept: "application/json",
    Authorization: getToken(),
    "Content-Type": "application/json",
  };
};

const getRequestUrl = (url, query) => {
  return stringifyUrl(
    { url, query },
    {
      skipNull: true,
      skipEmptyString: true,
    }
  );
};

const getFormRequestPayload = (method, body) => {
  return {
    method,
    timeout: 50000,
    headers: getFormHeaders(),
    body: method === "get" ? null : body,
  };
};

const getRequestPayload = (method, body) => {
  return {
    method,
    timeout: 50000,
    headers: getHeaders(),
    body: method === "get" ? null : JSON.stringify(body),
  };
};

const rawRequest = (method, url, body = {}, query = {}) => {
  return new Promise((resolve, reject) => {
    fetch(getRequestUrl(url, query), getRequestPayload(method, body))
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const formRequest = (method, url, body = {}, query = {}) => {
  return new Promise((resolve, reject) => {
    fetch(getRequestUrl(url, query), getFormRequestPayload(method, body))
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const request = (method, url, body = {}, query = {}) => {
  return new Promise((resolve, reject) => {
    fetch(getRequestUrl(url, query), getRequestPayload(method, body))
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const formGet = (url, query = {}) => {
  return formRequest("get", url, null, query);
};

const formPost = (url, body = {}, query = {}) => {
  return formRequest("post", url, body, query);
};

const formPut = (url, body = {}, query = {}) => {
  return formRequest("put", url, body, query);
};

const formDel = (url, body = {}, query = {}) => {
  return formRequest("delete", url, body, query);
};

const rawGet = (url, query = {}) => {
  return rawRequest("get", url, null, query);
};

const rawPost = (url, body = {}, query = {}) => {
  return rawRequest("post", url, body, query);
};

const rawPut = (url, body = {}, query = {}) => {
  return rawRequest("put", url, body, query);
};

const rawDel = (url, body = {}, query = {}) => {
  return rawRequest("delete", url, body, query);
};

const get = (url, query = {}) => {
  return request("get", url, null, query);
};

const post = (url, body = {}, query = {}) => {
  return request("post", url, body, query);
};

const put = (url, body = {}, query = {}) => {
  return request("put", url, body, query);
};

const del = (url, body = {}, query = {}) => {
  return request("delete", url, body, query);
};

export const Request = {
  get,
  post,
  put,
  del,
  rawGet,
  rawPost,
  rawPut,
  rawDel,
  formGet,
  formPost,
  formPut,
  formDel,
};
