#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["AspCoreAngular/AspCoreAngular.csproj", "AspCoreAngular/"]
COPY ["DataAccessAzureDB/DataAccessAzureDB.csproj", "DataAccessAzureDB/"]
RUN dotnet restore "AspCoreAngular/AspCoreAngular.csproj"
COPY . .
WORKDIR "/src/AspCoreAngular"
RUN dotnet build "AspCoreAngular.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "AspCoreAngular.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "AspCoreAngular.dll"]