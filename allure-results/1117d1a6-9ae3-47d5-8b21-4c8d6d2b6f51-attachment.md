# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\functional\Widgets.test.ts >> Verify Widgets Page
- Location: tests\functional\Widgets.test.ts:3:5

# Error details

```
Error: browserType.connect: WebSocket error: connect ECONNREFUSED ::1:61317
Call log:
  - <ws connecting> ws://localhost:61317/f0bd623e96d18050745de8f0849b4ecd
  - <ws error> ws://localhost:61317/f0bd623e96d18050745de8f0849b4ecd error connect ECONNREFUSED ::1:61317
  - <ws connect error> ws://localhost:61317/f0bd623e96d18050745de8f0849b4ecd connect ECONNREFUSED ::1:61317
  - <ws disconnected> ws://localhost:61317/f0bd623e96d18050745de8f0849b4ecd code=1006 reason=

```