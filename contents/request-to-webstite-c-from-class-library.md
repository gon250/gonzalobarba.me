---
title: How to access to a website(c#) from a class library and avoid .NET login
slug: request-to-webstite-c-from-class-library
date: '2015-05-12'
---

I spent a couple of days trying to access to my web application which has a .NET login implemented.

Basically what I did is request the login and find the value of the session I need to keep the session open and then request actions later.

Below you can see the function I have implemented to get the cookie.

## GetAuthCookie

```
public Cookie GetAuthCookie(string email, string password)
{
    var postData =  String.Format("Email={0}&Password={1}", email, password);
    var request = (HttpWebRequest)HttpWebRequest.Create(_path);
    request.AllowAutoRedirect = false;
    //Proxy credentials
    var proxy = WebRequest.DefaultWebProxy;
    if (proxy != null)
    {
       request.Proxy = proxy;
       request.Credentials =   CredentialCache.DefaultNetworkCredentials;
       request.Proxy.Credentials =                       CredentialCache.DefaultNetworkCredentials;
    }
    request.Method = "POST";
    var cookieJar = new CookieContainer();
    request.CookieContainer = cookieJar;
    request.ContentLength = postData.Length;
    request.ContentType = "application/x-www-form-urlencoded";
    var myWriter = new StreamWriter(request.GetRequestStream());
    myWriter.Write(postData);
    myWriter.Close();
    var webResponse = request.GetResponse() as HttpWebResponse;
    var rawHeaders = request.GetResponse().Headers.ToString();
    return webResponse.Cookies[0];
   }
```

Also I have created two functions to request a `HttpGet` and `HttpPost`.

## POST

```
public string HttpPost(string path, string json, Cookie authCookie)
        {
            var request = (HttpWebRequest)HttpWebRequest.Create(path);
            //Proxy credentials
            var proxy = WebRequest.DefaultWebProxy;
            if (proxy != null)
            {
                request.Proxy = proxy;
                request.Credentials = CredentialCache.DefaultNetworkCredentials;
                request.Proxy.Credentials = CredentialCache.DefaultNetworkCredentials;
            }
            request.Method = "POST";
            var cookieJar = new CookieContainer();
            cookieJar.Add(authCookie);
            request.CookieContainer = cookieJar;
            request.ContentType = "application/json";

            // write body
            using (var streamWriter = new StreamWriter(request.GetRequestStream()))
            {
                streamWriter.Write(json);
                streamWriter.Flush();
                streamWriter.Close();
            }

            // send request
            var webResponse = request.GetResponse() as HttpWebResponse;
            using (Stream stream = webResponse.GetResponseStream())
            {
                StreamReader reader = new StreamReader(stream, Encoding.UTF8);
                String responseString = reader.ReadToEnd();
                return responseString;
            }
        }
```

## GET

```
public string HttpGet(string path, Cookie authCookie)
        {
            var request = (HttpWebRequest)HttpWebRequest.Create(path);

            //Proxy credentials
            var proxy = WebRequest.DefaultWebProxy;
            if (proxy != null)
            {
                request.Proxy = proxy;
                request.Credentials = CredentialCache.DefaultNetworkCredentials;
                request.Proxy.Credentials = CredentialCache.DefaultNetworkCredentials;
            }
            request.Method = "GET";
            var cookieJar = new CookieContainer();
            cookieJar.Add(authCookie);
            request.CookieContainer = cookieJar;
            var webResponse = request.GetResponse() as HttpWebResponse;
            using (Stream stream = webResponse.GetResponseStream())
            {
                StreamReader reader = new StreamReader(stream, Encoding.UTF8);
                String responseString = reader.ReadToEnd();
                return responseString;
            }
        }
```

When we have the cookie, We only have to process a normal request using the functions we have implemented

### Example

```
//Get the cookie
var authCookie = _loginHelper.GetAuthCookie(email, password);

//Serialize your data
var jsonDetails = JsonConvert.SerializeObject(yourObj);

//Do the request
var response = HttpPost("yourPath", jsonDetails, authCookie);
```

resource: https://gist.github.com/gon250/ba8183ea4bd902168a9c

That's all. Fell free to share it. Hope you like it.

- [Original post](https://gon250.svbtle.com/request-to-webstite-c-from-class-library)
