FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
WORKDIR /home/app
ENV ASPNETCORE_URLS="http://0.0.0.0:5000"
COPY bin/Release/netcoreapp3.1/publish . 
ENTRYPOINT ["dotnet", "AspCoreAngular.dll"]
