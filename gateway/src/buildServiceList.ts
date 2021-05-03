export const buildServiceList = (hosts_string: string): any[] => {
  if (!hosts_string)
    throw Error(
      "No hosts given to the gateway! make sure you give the available services through the WAIT_HOSTS env variable!"
    );
  const host_url_list = hosts_string.split(", ");
  return host_url_list.map(buildService);
};

const buildService = (url: string): any => {
  const [name, port] = url.split(":");
  return {
    name,
    url: `http://${name}:${port}`,
  };
};
