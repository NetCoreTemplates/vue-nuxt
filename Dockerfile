FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /source

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - \
 && apt-get install -y --no-install-recommends nodejs \
 && echo "node version: $(node --version)" \
 && echo "npm version: $(npm --version)" \
 && rm -rf /var/lib/apt/lists/*

COPY VueNuxt/package.json .
COPY VueNuxt/npm-shrinkwrap.json .

RUN npm --prefix VueNuxt install

COPY . .
RUN dotnet restore

WORKDIR /source/VueNuxt
RUN dotnet publish -c release -o /app --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS runtime
WORKDIR /app
COPY --from=build /app ./
ENTRYPOINT ["dotnet", "VueNuxt.dll"]