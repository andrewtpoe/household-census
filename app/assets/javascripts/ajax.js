import 'whatwg-fetch';

const token = document.getElementsByName('csrf-token')[0].content;

export async function getRequest(url) {
  // console.log(`getting data from ${url}`);
  let fullResponse;
  const body = await fetch(url, {
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': token,
    },
    method: 'get',
  }).then((response) => {
    fullResponse = response;
    return response.json();
  }).then((b) => {
    return b;
  }).catch((err) => {
    alert(err);
  });
  return {
    body: body,
    ok: fullResponse.ok,
    status: fullResponse.status,
    statusText: fullResponse.statusText,
    type: fullResponse.type,
    url: fullResponse.url
  };
};

export async function postRequest(url, data) {
  // console.log('posting: ');
  // console.log(data);
  // console.log(`to ${url}`);
  let fullResponse;
  const body = await fetch(url, {
    body: JSON.stringify(data),
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': token,
    },
    method: 'post',
  }).then((response) => {
    fullResponse = response;
    return response.json();
  }).then((b) => {
    return b;
  }).catch((err) => {
    alert(err);
  });
  return {
    body: body,
    ok: fullResponse.ok,
    status: fullResponse.status,
    statusText: fullResponse.statusText,
    type: fullResponse.type,
    url: fullResponse.url
  };
};

export async function patchRequest(url, data) {
  // console.log('patching: ');
  // console.log(data);
  // console.log(`to ${url}`);
  let fullResponse;
  const body = await fetch(url, {
    body: JSON.stringify(data),
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': token,
    },
    method: 'patch',
  }).then((response) => {
    fullResponse = response;
    return response.json();
  }).then((b) => {
    return b;
  }).catch((err) => {
    alert(err);
  });
  return {
    body: body,
    ok: fullResponse.ok,
    status: fullResponse.status,
    statusText: fullResponse.statusText,
    type: fullResponse.type,
    url: fullResponse.url
  };
};

export async function deleteRequest(url) {
  // console.log(`deleting from ${url}`);
  let fullResponse;
  const body = await fetch(url, {
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': token,
    },
    method: 'delete',
  }).then((response) => {
    fullResponse = response;
  });
  return {
    ok: fullResponse.ok,
    status: fullResponse.status,
    statusText: fullResponse.statusText,
    type: fullResponse.type,
    url: fullResponse.url
  };
};
