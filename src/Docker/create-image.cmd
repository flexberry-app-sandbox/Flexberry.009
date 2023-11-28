docker build --no-cache -f SQL\Dockerfile.PostgreSql -t 009/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t 009/app ../..
