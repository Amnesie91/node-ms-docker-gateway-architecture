const buildServiceList = (hosts_string) => {
  if (!hosts_string)
    throw Error(
      "No hosts given to the gateway! make sure you give the available services through the WAIT_HOSTS env variable!"
    );
  const host_url_list = hosts_string.split(", ");
  return host_url_list.map(buildService);
};

const buildService = (url) => {
  const [name, port] = url.split(":");
  return {
    name,
    url: `http://${name}:${port}`,
  };
};

module.exports = { buildServiceList };
