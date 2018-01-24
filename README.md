# vue-nuxt

.NET Core 2.0 Vue Nuxt.js App Template

[![](https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/vue-nuxt.png)](http://vue-nuxt.web-templates.io/)

> Browse [source code](https://github.com/NetCoreTemplates/vue-nuxt), view live demo [vue-nuxt.web-templates.io](http://vue-nuxt.web-templates.io) and install with [dotnet-new](http://docs.servicestack.net/dotnet-new):

    $ npm install -g @servicestack/cli

    $ dotnet-new vue-nuxt ProjectName

## Description

Nuxt is an opinionated structured framework for rapidly developing Web Applications utilizing developer-friendly [Vue Single Page Components](https://vuejs.org/v2/guide/single-file-components.html) and features Hot module replacement that together with [.NET Core's watched builds](http://docs.servicestack.net/templates-websites#watched-net-core-builds) provides an optimal, highly productive development experience.

Nuxt Apps also enable development of high-performance responsive Web Apps by employing advanced packaging techniques like automatic code spliting, link prefetching, SPA navigation of statically-generated cacheable assets and integrated support for ES6/7 transpilation and js/css bundling and minification.

## Install Dependencies

After creating your project go to your `ProjectName` folder and install your client App dependencies with:

    $ npm install

If your IDE doesn't automatically install your .NET NuGet Dependencies, you can manually install them with:

    $ dotnet restore

## Dev Workflow

Start a [watched .NET Core build](http://docs.servicestack.net/templates-websites#watched-net-core-builds) in the background from the command-line with:

    $ dotnet watch run

In a new terminal window start a watched nuxt dev server build with:

    $ npm run dev

Then open [http://localhost:3000](http://localhost:3000) in your browser to view your App served directly from Nuxt.js dev server and will proxy all Server requests to ServiceStack Server running on [http://localhost:5000](http://localhost:5000).

## Update DTOs

Whilst Nuxt.js is a JavaScript (ES 6/7) App it still benefits from [ServiceStack's TypeScript Add Reference](http://docs.servicestack.net/typescript-add-servicestack-reference) where you can generate typed DTOs with the `dtos` npm script:

    $ npm run dtos

This will update the Servers `dtos.ts` and generate its corresponding `dtos.js` which can be imported as normal classes as seen in 
[gateway.js](https://github.com/NetCoreTemplates/vue-nuxt/blob/master/MyApp/src/shared/gateway.js#L3). Despite the App not being built with TypeScript, developing using a "TypeScript-aware" IDE like VS Code will still be able to utilize the TypeScript classes in [@servicestack/client](https://github.com/ServiceStack/servicestack-client) and the generated `dtos.ts` to provide a rich, typed intelli-sense experience.

## Generate Static Production Build

Most of the time during development you'll be viewing your App through Nuxt.js dev server to take advantage of it's Hot Module Replace support for instant UI updates. To view a production build of your App run:

    $ npm run build

Which will generate an encapsulated production build of your App in `/wwwroot` which you can view running from your ServiceStack Server App directly:

 - http://localhost:5000

## Publishing App for Deployment

To create a release client and server build of your App run:

    $ npm run publish

Which will publish your App to `bin/Release/netcoreapp2.0/publish` which you can deploy as a standard .NET Core App.
