import SecureLS from "secure-ls";

export const parseAlphaNumericNoSpace = (val) => {
  if (!val) {
    return "";
  }

  const normalize = val
    .replace(/\s/g, "")
    .replace(/,\./g, "")
    .replace(/[^0-9a-zA-Z ]/g, "");
  return normalize;
};

export const validPassword = new RegExp(
  "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
);

const ls = new SecureLS({
  encodingType: "aes",
  encryptionSecret: "SLAskwqekasdfjSJdswqke",
  encryptionNamespace: "portal",
});

// local storage action
export const setLocalStorage = (key, value) => ls.set(key, value);
export const getLocalStorage = (key) => ls.get(key);
export const removeLocalStorage = (key) => ls.remove(key);
export const removeAllLocalStorage = () => {
  const keys = ls.getAllKeys();

  keys.forEach((val) => {
    ls.remove(val);
  });
};
