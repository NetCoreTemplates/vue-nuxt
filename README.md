# vue-nuxt

.NET 6.0 Vue Nuxt.js App Template

[![](https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/vue-nuxt.png)](http://vue-nuxt.web-templates.io/)

> Browse [source code](https://github.com/NetCoreTemplates/vue-nuxt), view live demo [vue-nuxt.web-templates.io](http://vue-nuxt.web-templates.io) and install with [dotnet-new](https://docs.servicestack.net/dotnet-new):

    $ dotnet tool install -g x

    $ x new vue-nuxt ProjectName

Alternatively write new project files directly into an empty repository, using the Directory Name as the ProjectName:

    $ git clone https://github.com/<User>/<ProjectName>.git
    $ cd <ProjectName>
    $ x new vue-nuxt

## Description

Nuxt is an opinionated structured framework for rapidly developing Web Applications utilizing developer-friendly [Vue Single Page Components](https://vuejs.org/v2/guide/single-file-components.html) and featuring Hot module replacement that together with [.NET Core's watched builds](https://docs.servicestack.net/templates-websites#watched-net-core-builds) provides an highly productive development experience.

Nuxt also enables the development of high-performance responsive Web Apps by employing advanced packaging techniques like automatic code spliting, link prefetching, SPA navigation of statically-generated cacheable assets and integrated support for ES6/7 transpilation and js/css bundling and minification.

## Install Dependencies

After creating your project go to your `ProjectName` folder and install your client App dependencies with:

    $ npm install

If your IDE doesn't automatically install your .NET NuGet Dependencies, you can manually install them with:

    $ dotnet restore

## Dev Workflow

Start a [watched .NET Core build](https://docs.servicestack.net/templates-websites#watched-net-core-builds) in the background from the command-line with:

    $ dotnet watch run

In a new terminal window start a watched nuxt dev server build with:

    $ npm run dev

Then open [http://localhost:3000](http://localhost:3000) in your browser to view your App served directly from Nuxt.js dev server and will proxy all Server requests to ServiceStack Server running on [https://localhost:5001](https://localhost:5001).

## Update DTOs

Whilst Nuxt.js is a JavaScript (ES 6/7) App it still benefits from [ServiceStack's TypeScript Add Reference](https://docs.servicestack.net/typescript-add-servicestack-reference) where you can generate typed DTOs with the `dtos` npm script:

    $ npm run dtos

This will update the Servers `dtos.ts` and generate its corresponding `dtos.js` which can be imported as normal classes as seen in 
[gateway.js](https://github.com/NetCoreTemplates/vue-nuxt/blob/master/MyApp/src/shared/gateway.js#L3). Despite the App not being built with TypeScript, developing using a "TypeScript-aware" IDE like VS Code will still be able to utilize the TypeScript classes in [@servicestack/client](https://github.com/ServiceStack/servicestack-client) and the generated `dtos.ts` to provide a rich, typed intelli-sense experience.

## Generate Static Production Build

Most of the time during development you'll be viewing your App through Nuxt.js dev server to take advantage of it's Hot Module Replacement for instant UI updates. At any time you can also view a production build of your App with:

    $ npm run build

Which will generate an encapsulated production build of your App in `/wwwroot` which you can view running from your ServiceStack Server App directly:

 - https://localhost:5001

## Publishing App for Deployment

To create a release client and server build of your App run:

    $ npm run publish

Which will publish your App to `bin/Release/net5/publish` which you can deploy as a standard .NET Core App.
