*** Settings ***
Documentation    This is second leve documentation from suite qpid.robot

*** Test Cases ***
Dummy Test Case One
    [Documentation]   This Test case is not used due to not implemented feature. 
    [Tags]    IDQP-666
    [Timeout]    2 minutes
    Comment    Actually, I'm not run. At all.

Dummy Test Case Two
    [Documentation]   This Test case is not used due to another not implemented feature. 
    [Tags]    IDQP-999
    [Timeout]    2 min
    Comment    Actually, I'm not run. At all.

Dummy Test Case Three
    [Documentation]   This Test case is used. 
    [Tags]    IDQP-987
    [Timeout]    5 s
    Log    Actually, I'm run. But I do nothing
