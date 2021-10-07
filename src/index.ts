import core from "@actions/core";
import github from "@actions/github";

try {
  // `who-to-greet` input defined in action metadata file
  console.log("Changes");
} catch (error: any) {
  core.setFailed(error.message);
}
