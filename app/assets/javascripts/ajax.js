import 'whatwg-fetch';

const token = document.getElementsByName('csrf-token')[0].content;

export async function getRequest(url) {
  console.log(`getting data from ${url}`);
  const r = await fetch(url, {
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': token,
    },
    method: 'get',
  }).then((response) => {
    return response.json();
  });
  return r;
};

export async function postRequest(url, data) {
  console.log('posting: ');
  console.log(data);
  console.log(`to ${url}`);
  const r = await fetch(url, {
    body: JSON.stringify(data),
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': token,
    },
    method: 'post',
  }).then((response) => {
    return response.json();
  });
  return r;
};

export async function patchRequest(url, data) {
  console.log('patching: ');
  console.log(data);
  console.log(`to ${url}`);
  const r = await fetch(url, {
    body: JSON.stringify(data),
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': token,
    },
    method: 'patch',
  }).then((response) => {
    return response.json();
  });
  return r;
};

export async function deleteRequest(url) {
  console.log(`deleting from ${url}`);
  const r = await fetch(url, {
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': token,
    },
    method: 'delete',
  }).then((response) => {
    return response;
  });
  return r;
};
