import React from "react";

const HomePage = () => {
  return (
    <div className="bg-[#F1F8E8] min-h-screen p-4 text-[#55AD9B]">
      {/* Header avec icônes et titre */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-2xl font-bold">Spaced Repetition</span>
        <button className="text-[#95D2B3]">🔔</button>
      </div>

      {/* Jours de la semaine */}
      <div className="flex justify-between mb-6">
        {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
          <div key={index} className="text-center">
            <div className="w-8 h-8 border-2 border-[#55AD9B] rounded-full"></div>
            <p className="text-sm">{day}</p>
          </div>
        ))}
      </div>

      {/* Liste des niveaux */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Cards</h2>
        <div className="space-y-2">
          {[
            { level: 1, frequency: "Everyday", color: "#D8EFD3", count: 2 },
            { level: 2, frequency: "Every 2 days", color: "#95D2B3", count: 0 },
            { level: 3, frequency: "Every 4 days", color: "#55AD9B", count: 0 },
            { level: 4, frequency: "Every 8 days", color: "#F1F8E8", count: 0 },
            { level: 5, frequency: "Every 16 days", color: "rgb(216, 239, 211)", count: 0 },
            { level: 6, frequency: "Every 32 days", color: "rgb(149, 210, 179)", count: 0 },
            { level: 7, frequency: "Every 64 days", color: "rgb(85, 173, 155)", count: 0 },
          ].map((item) => (
            <div
              key={item.level}
              className="flex justify-between items-center p-3 rounded-lg"
              style={{ backgroundColor: item.color }}
            >
              <div>
                <h3 className="text-lg font-medium">Level {item.level}</h3>
                <p className="text-sm">{item.frequency}</p>
              </div>
              <p className="font-bold">{item.count} cards</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bouton du test du jour */}
      <div className="mt-6">
        <button className="w-full py-3 text-white font-semibold rounded-lg bg-[#55AD9B] shadow-lg">
          Today’s Test
        </button>
      </div>
    </div>
  );
};

export default HomePage;
