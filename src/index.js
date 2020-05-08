// Fetch all items in local storage.
const items = { ...localStorage };

// Populate an array of items.
var visited = [];
Object.keys(items).forEach(
    (host) =>
    {
        visited.push({host: host, visited: items[host]});
    }
)

// Sort ll the items on the value of the visited count.
visited = visited.sort(
    (a, b) =>
    {
        return (parseInt(b.visited) - parseInt(a.visited));
    }
);

// Create content for container
var list = "";
Object.keys(visited.slice(1, 10)).forEach(
    (index) =>
    {
        list = list + '<br>' + visited[index].host + ' (' + visited[index].visited + ')'
    }
)
document.getElementById('list').innerHTML = list;