// Sample workout data for the chart (replace with your actual workout data)
const workoutData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
    datasets: [{
        label: 'Workout History',
        data: [3, 5, 4, 6, 7], // Replace with your workout counts
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: false
    }]
};

document.addEventListener('DOMContentLoaded', function() {
    // Create a chart using Chart.js
    const ctx = document.getElementById('workout-chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: workoutData,
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    stepSize: 1
                }
            }
        }
    });
});

function goHome() {
    window.location.href = "home.html";
}
