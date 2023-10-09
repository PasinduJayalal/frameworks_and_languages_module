FROM mcr.microsoft.com/dotnet/sdk

WORKDIR /app/

RUN dotnet new web
# Alternativly: if `dotnet` is installed locally
# you can run `dotnet new web` locally to generate the web project stub and then copy the project files
#COPY . .

CMD ["dotnet", "run", "--urls=http://0.0.0.0:8000/"]
