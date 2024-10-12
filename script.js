const tips = [
    "Drink plenty of water to stay hydrated.",
    "Exercise regularly to maintain physical and mental health.",
    "Eat a balanced diet rich in vegetables and fruits.",
    "Get enough sleep, aim for 7-8 hours a night.",
    "Take regular breaks from screen time to avoid eye strain.",
    "Practice mindfulness or meditation to reduce stress.",
    "Limit sugar and processed foods for better overall health.",
    "Spend time outdoors to boost your mood and vitamin D levels.",
    "Stay connected with friends and family for emotional support.",
    "Avoid smoking and limit alcohol consumption."
];

document.getElementById('generateButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * tips.length);
    document.getElementById('tip').textContent = tips[randomIndex];
});
