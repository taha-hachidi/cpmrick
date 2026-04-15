@ECHO OFF
SET BASE_DIR=%~dp0
IF NOT EXIST "%BASE_DIR%\.mvn\wrapper\maven-wrapper.jar" (
  powershell -Command "Invoke-WebRequest -UseBasicParsing -Uri https://repo.maven.apache.org/maven2/org/apache/maven/wrapper/maven-wrapper/3.3.2/maven-wrapper-3.3.2.jar -OutFile '%BASE_DIR%\.mvn\wrapper\maven-wrapper.jar'"
)
java -classpath "%BASE_DIR%\.mvn\wrapper\maven-wrapper.jar" org.apache.maven.wrapper.MavenWrapperMain %*
