type OnChangeListenerType = (pathname: string) => void;

const onChangeListeners: OnChangeListenerType[] = [];

if (typeof window !== "undefined") {
  window.addEventListener("popstate", (e) => {
    console.log("Pop state: %O", e);
    onChangeListeners.forEach(onChange => onChange(getPathname()));
  })
}


export const pushState = (pathname: string) => {
  history.pushState({}, "", pathname);
  onChangeListeners.forEach(onChange => onChange(pathname));
}

export const addOnChangeListener = (onChange: OnChangeListenerType) =>
  onChangeListeners.push(onChange);

export const removeOnChangeListener = (onChange: OnChangeListenerType) => { 
  const i = onChangeListeners.indexOf(onChange);
  if (i !== -1) onChangeListeners.splice(i, 1);
}

export const getPathname = () => location.pathname;
