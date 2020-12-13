import React, { useEffect } from 'react';
import queryString from 'query-string';


const Login = () => {
  const { query: { code }} = queryString.parseUrl(window.location.href);
  return <div>{ code }</div>
}

