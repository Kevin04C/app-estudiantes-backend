const { model, Schema } = require("mongoose");

const conciertoSchema = new Schema({
  event_id: { type: String, required: true },
  event_mid: { type: String, required: true },
  name: { type: String, required: true },
  link: { type: String, required: true },
  start_time: { type: Date, required: true },
  start_time_utc: { type: Date, required: true },
  start_time_precision_sec: { type: Number, required: true },
  end_time: { type: Date },
  end_time_utc: { type: Date },
  end_time_precision_sec: { type: Number },
  is_virtual: { type: Boolean, default: false },
  thumbnail: { type: String },
  publisher: { type: String },
  publisher_favicon: { type: String },
  publisher_domain: { type: String },
  info_links: [
    {
      source: { type: String, required: true },
      link: { type: String, required: true },
    },
  ],
  venue: {
    google_id: { type: String, required: true },
    name: { type: String, required: true },
    website: { type: String },
    review_count: { type: Number },
    rating: { type: Number },
    subtype: { type: String },
    subtypes: { type: [String] },
    latitude: { type: Number },
    longitude: { type: Number },
    street: { type: String },
    city: { type: String },
    country: { type: String },
    timezone: { type: String },
    google_mid: { type: String },
  },
  tags: { type: [String], default: [] },
  language: { type: String },
});

const Concierto = model("Concierto", conciertoSchema);


const getConciertos = () => {
  return Concierto.find();
}

module.exports = { getConciertos }
