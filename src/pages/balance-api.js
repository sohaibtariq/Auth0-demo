import React, { useEffect } from "react"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

const Payments = () => {
  useEffect(() => {
    var script = document.createElement("script")
    script.src = "https://dxjs.apimatic.io/v7/static/js/portal.v7-uber.js"
    script.onload = function() {
      /*global APIMaticDevPortal */
      APIMaticDevPortal.show({
        container: "apimatic-widget",
        portalStyle: "default",
        codegenApiRoutes: {
          docsgen:
            "/api/api-entities/9km5j-8s5aOBVJt6Jz6wzYPI56bzSBsd7utyujD8xT8MDH40PvfykDrEpAAmG10P/portal-artifacts/docs/generated-file?template={template}",
          codegen:
            "/api/api-entities/9km5j-8s5aOBVJt6Jz6wzYPI56bzSBsd7utyujD8xT8MDH40PvfykDrEpAAmG10P/portal-artifacts/sdks/generated-file?template={template}",
          transform:
            "/api/api-entities/9km5j-8s5aOBVJt6Jz6wzYPI56bzSBsd7utyujD8xT8MDH40PvfykDrEpAAmG10P/portal-artifacts/specs/generated-file?format={format}",
          apiProxy: "https://proxy.apimatic.io/api/proxy",
        },
        apiKey:
          "PkUYNyvjYA7DfFBwoKTjTGQOgH9yQNvnCQw6TteVNcn_SiQqRWJSKorz9IMbZ8mEzk6GNsZEke7GSp-fh2MdVA**",
        baseUrl: "https://www.apimatic.io",
        enableExport: true,
        renameHttpToRest: false,
        enableConsoleCalls: true,
        useProxyForConsoleCalls: true,
        initialPlatform: "http_curl_v1",
        languageSettings: {
          http_curl_v1: {
            disableSdkDownload: true,
          },
          cs_net_standard_lib: {
            disableSdkDownload: false,
            sdkDownloadLink: "",
          },
          java_eclipse_jre_lib: {
            disableSdkDownload: false,
            sdkDownloadLink: "",
          },
          php_generic_lib_v2: {
            disableSdkDownload: false,
            sdkDownloadLink: "",
          },
          python_generic_lib: {
            disableSdkDownload: false,
            sdkDownloadLink: "",
          },
          ruby_generic_lib: {
            disableSdkDownload: false,
            sdkDownloadLink: "",
          },
          ts_generic_lib: {
            disableSdkDownload: false,
            sdkDownloadLink: "",
          },
        },
        allowedExportFormats: [
          "postman10",
          "postman20",
          "openapi3json",
          "openapi3yaml",
          "swagger20",
          "swaggeryaml",
          "swagger10",
          "raml",
          "raml10",
          "apiblueprint",
          "wadl2009",
          "apimatic",
          "wsdl",
          "insomnia",
          "insomniayaml",
        ],
        routeStyle: "memory",
        themeOverrides: {
          themeType: "cool",
          palette: {
            primaryColor: "#0c7ff2",
            linkColor: "#0062ff",
          },
          fontSource: [],
          cssStyles: {
            headings: {
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
              h1: {
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "28.83px",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "1.3",
              },
              h2: {
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "25.63px",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "1.3",
              },
              h3: {
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "22.78px",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "1.3",
              },
              h4: {
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "18px",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "1.3",
              },
              h5: {
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "16px",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "1.3",
              },
              h6: {
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "14.22px",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "1.3",
              },
            },
            body: {
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
              text1: {
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "16px",
                fontWeight: "400",
                fontStyle: "normal",
                lineHeight: "1.75",
              },
              text2: {
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "14.22px",
                fontWeight: "400",
                fontStyle: "normal",
                lineHeight: "1.75",
              },
              text3: {
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "12.64px",
                fontWeight: "400",
                fontStyle: "normal",
                lineHeight: "1.75",
              },
            },
            code: {
              fontFamily:
                "'SFMono-400', Consolas, 'Liberation Mono', Menlo, Courier",
              blockCode: {
                fontFamily:
                  "'SFMono-400', Consolas, 'Liberation Mono', Menlo, Courier",
                fontSize: "14.22px",
                fontWeight: "400",
                fontStyle: "normal",
                lineHeight: "1.75",
              },
              inlineCode: {
                fontFamily:
                  "'SFMono-400', Consolas, 'Liberation Mono', Menlo, Courier",
                fontSize: "14.22px",
                fontWeight: "400",
                fontStyle: "normal",
                lineHeight: "1.75",
              },
            },
          },
        },
      })
    }
    document.head.appendChild(script)
    return () => {
      document.head.removeChild(script)
    }
    // document.getElementsByTagName("head")[0].appendChild(script)
  }, [])
  return (
    // <Layout>
    //   <SEO title="Home" />
    <div id="apimatic-widget" className="w-full h-screen" />
    // </Layout>
  )
}
export default Payments
