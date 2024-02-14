document.addEventListener('DOMContentLoaded', function() {
    const owner = 'venagaci';
    const repo = 'venagaci-uc.github.io';

    // Fetch data for your repository
    fetch(`https://api.github.com/repos/${owner}/${repo}`)
        .then(response => response.json())
        .then(data => {
            const repositoryName = data.full_name;
            const starsCount = data.stargazers_count;

            // Create a Chart.js chart
            const ctx = document.getElementById('myChart').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: [repositoryName],
                    datasets: [{
                        label: 'Stars Count',
                        data: [starsCount],
                        backgroundColor: 'rgba(54, 162, 235, 0.5)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
