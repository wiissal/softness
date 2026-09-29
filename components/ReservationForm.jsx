"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { timeSlots, guestOptions, seatingOptions } from "@/lib/reservation";
import { ease } from "@/lib/motion";

const fieldClass = "w-full border-b border-ink/20 bg-transparent py-3 text-ink outline-none transition-colors focus:border-olive";
const labelClass = "label block text-ink-soft";
const errorClass = "mt-2 text-sm text-clay";
const submitClass = "mt-8 w-full rounded-full bg-ink px-8 py-4 text-sm font-semibold text-ivory transition-colors duration-500 ease-soft hover:bg-olive sm:w-auto";

const emptyForm = {
  name: "",
  phone: "",
  email: "",
  date: "",
  time: "",
  guests: "2",
  seating: seatingOptions[0],
  notes: "",
};

// Today's date as YYYY-MM-DD, used to block past bookings
const today = new Date().toISOString().split("T")[0];

function validate(values) {
  const errors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please tell us your name.";
  }

  const digits = values.phone.replace(/\D/g, "");
  if (digits.length < 8) {
    errors.phone = "Please enter a phone number we can reach you on.";
  }

  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "That email doesn't look right.";
  }

  if (!values.date) {
    errors.date = "Please choose a date.";
  } else if (values.date < today) {
    errors.date = "Please choose a date from today onwards.";
  }

  if (!values.time) {
    errors.time = "Please choose a time.";
  }

  return errors;
}

export default function ReservationForm() {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [booking, setBooking] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));

    // Clear a field's error as soon as the visitor starts fixing it
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const found = validate(values);

    if (Object.keys(found).length > 0) {
      setErrors(found);
      return;
    }

    setBooking(values);
  }

  if (booking) {
    return <Confirmation booking={booking} onReset={() => setBooking(null)} />;
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="mt-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            className={fieldClass}
            placeholder="Your full name"
          />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            className={fieldClass}
            placeholder="+212 ..."
          />
          {errors.phone && <p className={errorClass}>{errors.phone}</p>}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="email" className={labelClass}>
            Email - optional
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            className={fieldClass}
            placeholder="you@example.com"
          />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="date" className={labelClass}>
            Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            min={today}
            value={values.date}
            onChange={handleChange}
            className={fieldClass}
          />
          {errors.date && <p className={errorClass}>{errors.date}</p>}
        </div>

        <div>
          <label htmlFor="time" className={labelClass}>
            Time
          </label>
          <select
            id="time"
            name="time"
            value={values.time}
            onChange={handleChange}
            className={fieldClass}
          >
            <option value="">Choose a time</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          {errors.time && <p className={errorClass}>{errors.time}</p>}
        </div>

        <div>
          <label htmlFor="guests" className={labelClass}>
            Guests
          </label>
          <select
            id="guests"
            name="guests"
            value={values.guests}
            onChange={handleChange}
            className={fieldClass}
          >
            {guestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="seating" className={labelClass}>
            Seating
          </label>
          <select
            id="seating"
            name="seating"
            value={values.seating}
            onChange={handleChange}
            className={fieldClass}
          >
            {seatingOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="notes" className={labelClass}>
            Anything we should know - optional
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            value={values.notes}
            onChange={handleChange}
            className={fieldClass}
            placeholder="Allergies, a birthday, a quiet corner…"
          />
        </div>
      </div>

      <button type="submit" className={submitClass}>
        Request a table
      </button>

      <p className="mt-4 text-sm text-ink-soft">
        No booking is actually sent.
      </p>
    </form>
  );
}

function Confirmation({ booking, onReset }) {
  const date = new Date(booking.date).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease }}
      className="mt-12 border-t border-ink/10 pt-10"
    >
      <span className="grid size-12 place-items-center rounded-full bg-sage-soft">
        <Check className="size-6 text-olive" strokeWidth={1.5} />
      </span>

      <h2 className="mt-6 font-display text-3xl lg:text-4xl">
        Thank you, {booking.name.split(" ")[0]}.
      </h2>

      <p className="mt-4 max-w-md text-ink-soft">
        We have your request for <strong className="text-ink">{booking.guests}</strong> on{" "}
        <strong className="text-ink">{date}</strong> at{" "}
        <strong className="text-ink">{booking.time}</strong>. We will call you shortly to confirm.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="mt-8 text-sm font-semibold underline underline-offset-4 hover:text-olive"
      >
        Make another request
      </button>
    </motion.div>
  );
}