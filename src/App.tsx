import React, { useState } from 'react';
// import React from 'react';
import './App.css';

const App: React.FC = () => {
  const [datetime, setDatetime] = useState<string>('');
  const [guests, setGuests] = useState<number>(1);
  const [remarks, setRemarks] = useState<string>('');
  const [reservationInfo, setReservationInfo] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // 予約情報を設定
    const info = `Reservation confirmed for ${datetime} for ${guests} guests.\n Remarks:${remarks}`;
    setReservationInfo(info);

    // ここでフォームの送信処理を実行する
    console.log(info);
  };

  return (
    <div className="container">
      <h1>Reservation Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="datetime">Date and Time:</label>
          <input
            type="datetime-local"
            id="datetime"
            name="datetime"
            value={datetime}
            onChange={(e) => setDatetime(e.target.value)}
            required
          />
        </div>
        <div>
          {/* 人数の選択 */}
          <label>Number of Guests:</label>
          <select
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value, 10))}
            required
          >
            {[...Array(20)].map((_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
        <div>
          {/* 備考の入力 */}
          <label>Remarks:</label>
          <textarea
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            rows={4}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      {reservationInfo && (
        <div className="reservation-info">
          <h2>Reservation Information</h2>
          <p>{reservationInfo}</p>
        </div>
      )}
    </div>
  );
};

export default App
