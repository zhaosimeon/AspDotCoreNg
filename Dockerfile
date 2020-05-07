FROM mcr.microsoft.com/dotnet/core/sdk:3.1
 
WORKDIR /home/app
 
COPY . .
 
RUN dotnet restore
 
RUN dotnet publish ./AspCoreAngular/AspCoreAngular.csproj -o /publish/
 
WORKDIR /publish
 
ENV ASPNETCORE_URLS="http://0.0.0.0:5000"
 
ENTRYPOINT ["dotnet", "AspCoreAngular.dll"]

