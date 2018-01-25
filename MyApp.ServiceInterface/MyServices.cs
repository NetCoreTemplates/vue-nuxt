using System;
using System.Collections.Generic;
using System.Linq;
using ServiceStack;
using ServiceStack.Templates;
using ServiceStack.DataAnnotations;
using MyApp.ServiceModel;

namespace MyApp.ServiceInterface
{
    [Exclude(Feature.Metadata)]
    [FallbackRoute("/{PathInfo*}", Matches="AcceptsHtml")]
    public class FallbackForClientRoutes
    {
        public string PathInfo { get; set; }
    }

    public class MyServices : Service
    {
        //Return index.html for unmatched requests so routing is handled on client
        public object Any(FallbackForClientRoutes request) => 
            new PageResult(Request.GetPage("/"));

        public object Any(Hello request)
        {
            return new HelloResponse { Result = $"Hello, {request.Name}!" };
        }

        public object Any(GetLinks request) => new GetLinksResponse 
        {
            Results = new Dictionary<string, string> 
            {
                {"servicestack.net", "https://servicestack.net"},
                {"StackOverflow", "http://stackoverflow.com/search?q=servicestack"},
                {"Customer Forums", "https://forums.servicestack.net"},
                {"Issue Tracker", "https://github.com/ServiceStack/Issues"},
                {"Feature Requests", "http://servicestack.uservoice.com/forums/176786-feature-requests"},
                {"Release Notes", "https://servicestack.net/release-notes"},
                {"Live Demos", "https://github.com/ServiceStackApps/LiveDemos"},
                {".NET Core Live Demos", "https://github.com/NetCoreApps/LiveDemos"},
                {"Gistlyn", "http://gistlyn.com"},
            }
        };

        public object Any(GetPost request) => new GetPostResponse 
        {
            Id = request.Id,
            Title = $"Title {request.Id}",
            Description = $"Post Description {request.Id}",
        };
    }
}
