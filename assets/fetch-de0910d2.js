import{Q as v}from"./react-toastify.esm-ee9aa230.js";class m extends Error{constructor(t,r,e){const o=t.status||t.status===0?t.status:"",n=t.statusText||"",a=`${o} ${n}`.trim(),i=a?`status code ${a}`:"an unknown error";super(`Request failed with ${i}`),Object.defineProperty(this,"response",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"request",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"options",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name="HTTPError",this.response=t,this.request=r,this.options=e}}class w extends Error{constructor(t){super("Request timed out"),Object.defineProperty(this,"request",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name="TimeoutError",this.request=t}}const f=s=>s!==null&&typeof s=="object",l=(...s)=>{for(const t of s)if((!f(t)||Array.isArray(t))&&t!==void 0)throw new TypeError("The `options` argument must be an object");return b({},...s)},g=(s={},t={})=>{const r=new globalThis.Headers(s),e=t instanceof globalThis.Headers,o=new globalThis.Headers(t);for(const[n,a]of o.entries())e&&a==="undefined"||a===void 0?r.delete(n):r.set(n,a);return r},b=(...s)=>{let t={},r={};for(const e of s)if(Array.isArray(e))Array.isArray(t)||(t=[]),t=[...t,...e];else if(f(e)){for(let[o,n]of Object.entries(e))f(n)&&o in t&&(n=b(t[o],n)),t={...t,[o]:n};f(e.headers)&&(r=g(r,e.headers),t.headers=r)}return t},P=(()=>{let s=!1,t=!1;const r=typeof globalThis.ReadableStream=="function",e=typeof globalThis.Request=="function";return r&&e&&(t=new globalThis.Request("https://empty.invalid",{body:new globalThis.ReadableStream,method:"POST",get duplex(){return s=!0,"half"}}).headers.has("Content-Type")),s&&!t})(),S=typeof globalThis.AbortController=="function",x=typeof globalThis.ReadableStream=="function",E=typeof globalThis.FormData=="function",R=["get","post","put","patch","head","delete"],k={json:"application/json",text:"text/*",formData:"multipart/form-data",arrayBuffer:"*/*",blob:"*/*"},d=2147483647,T=Symbol("stop"),A={json:!0,parseJson:!0,searchParams:!0,prefixUrl:!0,retry:!0,timeout:!0,hooks:!0,throwHttpErrors:!0,onDownloadProgress:!0,fetch:!0},C={method:!0,headers:!0,body:!0,mode:!0,credentials:!0,cache:!0,redirect:!0,referrer:!0,referrerPolicy:!0,integrity:!0,keepalive:!0,signal:!0,window:!0,dispatcher:!0,duplex:!0},O=s=>R.includes(s)?s.toUpperCase():s,j=["get","put","head","delete","options","trace"],I=[408,413,429,500,502,503,504],q=[413,429,503],_={limit:2,methods:j,statusCodes:I,afterStatusCodes:q,maxRetryAfter:Number.POSITIVE_INFINITY,backoffLimit:Number.POSITIVE_INFINITY,delay:s=>.3*2**(s-1)*1e3},U=(s={})=>{if(typeof s=="number")return{..._,limit:s};if(s.methods&&!Array.isArray(s.methods))throw new Error("retry.methods must be an array");if(s.statusCodes&&!Array.isArray(s.statusCodes))throw new Error("retry.statusCodes must be an array");return{..._,...s,afterStatusCodes:q}};async function L(s,t,r,e){return new Promise((o,n)=>{const a=setTimeout(()=>{r&&r.abort(),n(new w(s))},e.timeout);e.fetch(s,t).then(o).catch(n).then(()=>{clearTimeout(a)})})}async function N(s,{signal:t}){return new Promise((r,e)=>{t&&(t.throwIfAborted(),t.addEventListener("abort",o,{once:!0}));function o(){clearTimeout(n),e(t.reason)}const n=setTimeout(()=>{t==null||t.removeEventListener("abort",o),r()},s)})}const $=(s,t)=>{const r={};for(const e in t)!(e in C)&&!(e in A)&&!(e in s)&&(r[e]=t[e]);return r};class p{static create(t,r){const e=new p(t,r),o=async()=>{if(typeof e._options.timeout=="number"&&e._options.timeout>d)throw new RangeError(`The \`timeout\` option cannot be greater than ${d}`);await Promise.resolve();let i=await e._fetch();for(const u of e._options.hooks.afterResponse){const h=await u(e.request,e._options,e._decorateResponse(i.clone()));h instanceof globalThis.Response&&(i=h)}if(e._decorateResponse(i),!i.ok&&e._options.throwHttpErrors){let u=new m(i,e.request,e._options);for(const h of e._options.hooks.beforeError)u=await h(u);throw u}if(e._options.onDownloadProgress){if(typeof e._options.onDownloadProgress!="function")throw new TypeError("The `onDownloadProgress` option must be a function");if(!x)throw new Error("Streams are not supported in your environment. `ReadableStream` is missing.");return e._stream(i.clone(),e._options.onDownloadProgress)}return i},a=e._options.retry.methods.includes(e.request.method.toLowerCase())?e._retry(o):o();for(const[i,u]of Object.entries(k))a[i]=async()=>{e.request.headers.set("accept",e.request.headers.get("accept")||u);const c=(await a).clone();if(i==="json"){if(c.status===204||(await c.clone().arrayBuffer()).byteLength===0)return"";if(r.parseJson)return r.parseJson(await c.text())}return c[i]()};return a}constructor(t,r={}){if(Object.defineProperty(this,"request",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"abortController",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_retryCount",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_input",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_options",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this._input=t,this._options={credentials:this._input.credentials||"same-origin",...r,headers:g(this._input.headers,r.headers),hooks:b({beforeRequest:[],beforeRetry:[],beforeError:[],afterResponse:[]},r.hooks),method:O(r.method??this._input.method),prefixUrl:String(r.prefixUrl||""),retry:U(r.retry),throwHttpErrors:r.throwHttpErrors!==!1,timeout:r.timeout??1e4,fetch:r.fetch??globalThis.fetch.bind(globalThis)},typeof this._input!="string"&&!(this._input instanceof URL||this._input instanceof globalThis.Request))throw new TypeError("`input` must be a string, URL, or Request");if(this._options.prefixUrl&&typeof this._input=="string"){if(this._input.startsWith("/"))throw new Error("`input` must not begin with a slash when using `prefixUrl`");this._options.prefixUrl.endsWith("/")||(this._options.prefixUrl+="/"),this._input=this._options.prefixUrl+this._input}if(S){if(this.abortController=new globalThis.AbortController,this._options.signal){const e=this._options.signal;this._options.signal.addEventListener("abort",()=>{this.abortController.abort(e.reason)})}this._options.signal=this.abortController.signal}if(P&&(this._options.duplex="half"),this.request=new globalThis.Request(this._input,this._options),this._options.searchParams){const o="?"+(typeof this._options.searchParams=="string"?this._options.searchParams.replace(/^\?/,""):new URLSearchParams(this._options.searchParams).toString()),n=this.request.url.replace(/(?:\?.*?)?(?=#|$)/,o);(E&&this._options.body instanceof globalThis.FormData||this._options.body instanceof URLSearchParams)&&!(this._options.headers&&this._options.headers["content-type"])&&this.request.headers.delete("content-type"),this.request=new globalThis.Request(new globalThis.Request(n,{...this.request}),this._options)}this._options.json!==void 0&&(this._options.body=JSON.stringify(this._options.json),this.request.headers.set("content-type",this._options.headers.get("content-type")??"application/json"),this.request=new globalThis.Request(this.request,{body:this._options.body}))}_calculateRetryDelay(t){if(this._retryCount++,this._retryCount<this._options.retry.limit&&!(t instanceof w)){if(t instanceof m){if(!this._options.retry.statusCodes.includes(t.response.status))return 0;const e=t.response.headers.get("Retry-After");if(e&&this._options.retry.afterStatusCodes.includes(t.response.status)){let o=Number(e);return Number.isNaN(o)?o=Date.parse(e)-Date.now():o*=1e3,this._options.retry.maxRetryAfter!==void 0&&o>this._options.retry.maxRetryAfter?0:o}if(t.response.status===413)return 0}const r=this._options.retry.delay(this._retryCount);return Math.min(this._options.retry.backoffLimit,r)}return 0}_decorateResponse(t){return this._options.parseJson&&(t.json=async()=>this._options.parseJson(await t.text())),t}async _retry(t){try{return await t()}catch(r){const e=Math.min(this._calculateRetryDelay(r),d);if(e!==0&&this._retryCount>0){await N(e,{signal:this._options.signal});for(const o of this._options.hooks.beforeRetry)if(await o({request:this.request,options:this._options,error:r,retryCount:this._retryCount})===T)return;return this._retry(t)}throw r}}async _fetch(){for(const r of this._options.hooks.beforeRequest){const e=await r(this.request,this._options);if(e instanceof Request){this.request=e;break}if(e instanceof Response)return e}const t=$(this.request,this._options);return this._options.timeout===!1?this._options.fetch(this.request.clone(),t):L(this.request.clone(),t,this.abortController,this._options)}_stream(t,r){const e=Number(t.headers.get("content-length"))||0;let o=0;return t.status===204?(r&&r({percent:1,totalBytes:e,transferredBytes:o},new Uint8Array),new globalThis.Response(null,{status:t.status,statusText:t.statusText,headers:t.headers})):new globalThis.Response(new globalThis.ReadableStream({async start(n){const a=t.body.getReader();r&&r({percent:0,transferredBytes:0,totalBytes:e},new Uint8Array);async function i(){const{done:u,value:h}=await a.read();if(u){n.close();return}if(r){o+=h.byteLength;const c=e===0?0:o/e;r({percent:c,transferredBytes:o,totalBytes:e},h)}n.enqueue(h),await i()}await i()}}),{status:t.status,statusText:t.statusText,headers:t.headers})}}/*! MIT License © Sindre Sorhus */const y=s=>{const t=(r,e)=>p.create(r,l(s,e));for(const r of R)t[r]=(e,o)=>p.create(e,l(s,o,{method:r}));return t.create=r=>y(l(r)),t.extend=r=>y(l(s,r)),t.stop=T,t},D=y(),H=D,M="https://api.themoviedb.org/3",B="d1c21e798be8e69642bc9e5fdadcfaf6",F={api_key:B};async function Y(s,t,r,e){const o={trending:"/trending/movie/day",searchMovies:"/search/movie",movieDetails:`/movie/${e}`,movieCredits:`/movie/${e}/credits`,movieReviews:`/movie/${e}/reviews`},n=`${M}${o[s]}`,a={searchParams:{...F,...e?{}:{page:r},...t?{query:t,page:r}:{}}};try{return await H.get(n,a).json()}catch(i){throw v.error(`Error fetching data: ${i.message}`),new Error(`API request failed: ${i.message}`)}}export{Y as f};
