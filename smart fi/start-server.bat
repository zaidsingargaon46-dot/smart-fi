@echo off
title FINWISE - Smart Financial Literacy and Budget Planner
echo ========================================================
echo  FINWISE - Smart Money. Better Decisions. Brighter Future.
echo ========================================================
echo.
echo Starting local web server...
start http://localhost:8000
python serve.py
if %ERRORLEVEL% NEQ 0 (
    echo Python command failed, trying py launcher...
    py serve.py
)
pause
