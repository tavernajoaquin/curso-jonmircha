export const helpHttp = () => {
  const customFetch = (endpoint, options) => {
    const defaultHeaders={
      accept: "application/json",
    };
    
    //abort controller detecta si el servidor esta caido y te avisa si ese es el caso
    //porque si no la peticion va a quedar en pendiente
    const controller = new AbortController();
    options.signal = controller.signal;

    //Si no se especifica el metodo, por default va a ser GET
    options.method = options.method || "GET";
    //Los headers van a ser la suma del default + los q ponga el usuario, o las default
    options.headers = options.headers ? {...defaultHeaders, ...options.headers} : defaultHeaders;

    //Si la peticion no tiene body (Por ejemplo en un GET)
    options.body = JSON.stringify(options.body) || false;
    //Lo elimino de la peticion (Si se envia con falso, o vacio, se genera un error)
    if(!options.body) delete options.body;

    //console.log(options);
    //Si no se tiene una respuesta despues de X segundos, se aborta la petición
    //En este caso se dispararia un catch del trycatch
    setTimeout(() => controller.abort(), 5000);

    return fetch(endpoint, options)
      //Si es verdadero, lo pasa a json
      //Si es falso, rechaza la promesa y genera un objeto de error
      .then((res)=> res.ok ? res.json():Promise.reject({
        err:true,
        status: res.status || "00", //codigo de error 00 = no trae ningun status de error
        statusText: res.statusText || "Ocurrio un error"
      }))
      .catch((err)=>err);
  };

  const get = (url, options = {}) => customFetch(url, options);

  const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };

  const put = (url, options = {}) => {
    options.method = "PUT";
    return customFetch(url, options);
  };

  const del = (url, options = {}) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  return{
    get,
    post,
    put,
    del,
  };
};