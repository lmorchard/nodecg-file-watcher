export default function reloadOnFileChange(nodecg) {
  nodecg.log.info(`Watching file changes to reload bundle ${nodecg.bundleName}`);
  const handleFileChanged = (ev) => {
    if (nodecg.bundleName === ev.bundleName) {
      nodecg.log.info(`Reloading bundle ${nodecg.bundleName}`);
      nodecg.unlisten('bundleFileChanged', 'file-watcher', handleFileChanged);
      window.location.reload();
    }
  };
  nodecg.listenFor('bundleFileChanged', 'file-watcher', handleFileChanged);  
}
