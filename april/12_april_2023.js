/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
      const simplifiedPath = [];
  const dirr = path.split("/");

  for (const dir of dirr) {
    if (dir === "" || dir === ".") continue;
    dir === ".." ? simplifiedPath.pop() : simplifiedPath.push(dir);
  }

  return "/" + simplifiedPath.join("/");
};
