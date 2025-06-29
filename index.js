// Scooter constructor function
function Scooter(year, color, model) {
  this.year = year;   // The year the scooter was made
  this.color = color; // The color of the scooter
  this.model = model; // The model of the scooter
}

// Driver constructor function
function Driver(name, age, experience) {
  this.name = name;         // The driver's name
  this.age = age;           // The driver's age
  this.experience = experience; // The driver's experience (in years, etc.)
}

// PickupLocation constructor function
function PickupLocation(address, city) {
  this.address = address; // The street address for pickup
  this.city = city;       // The city of the pickup location
}
