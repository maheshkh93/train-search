import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [newData, setNewData] = useState([
    {
      _id: "6453d82aada5968af32dea19",
      trainNo: "100",
      origin: {
        station: "bengaluru",
        start: "9:30",
        distance: 0,
      },
      intermediate: [
        {
          station: "nelamangala",
          end: "10:00",
          start: "10:05",
          distance: 30,
        },

        {
          station: "kunigal",
          end: "11:00",
          start: "11:05",
          distance: 90,
        },

        {
          station: "cr pattana",
          end: "11:35",
          start: "11:40",
          distance: 120,
        },
        {
          station: "shanthigrama",
          end: "12:10",
          start: "12:15",
          distance: 160,
        },
      ],
      destination: {
        station: "hassan",
        end: "12:30",
        distance: 180,
      },
    },
    {
      _id: "6453d82a8edbf294139b65b1",
      trainNo: "101",
      origin: {
        station: "bengaluru",
        start: "11:30",
        distance: 0,
      },
      intermediate: [
        {
          station: "nelamangala",
          end: "12:00",
          start: "12:05",
          distance: 30,
        },

        {
          station: "kunigal",
          end: "13:00",
          start: "13:05",
          distance: 90,
        },

        {
          station: "cr pattana",
          end: "13:35",
          start: "13:40",
          distance: 120,
        },
        {
          station: "shanthigrama",
          end: "14:10",
          start: "14:15",
          distance: 160,
        },
      ],
      destination: {
        station: "hassan",
        end: "14:30",
        distance: 180,
      },
    },
    {
      _id: "6453d82a2d359d1998ef10a2",
      trainNo: "102",
      origin: {
        station: "bengaluru",
        start: "13:30",
        distance: 0,
      },
      intermediate: [
        {
          station: "nelamangala",
          end: "14:00",
          start: "14:05",
          distance: 30,
        },

        {
          station: "kunigal",
          end: "15:00",
          start: "15:05",
          distance: 90,
        },

        {
          station: "cr pattana",
          end: "15:35",
          start: "15:40",
          distance: 120,
        },
        {
          station: "shanthigrama",
          end: "16:10",
          start: "16:15",
          distance: 160,
        },
      ],
      destination: {
        station: "hassan",
        end: "16:30",
        distance: 180,
      },
    },
    {
      _id: "6453e0a2447b33bbfd2455d2",
      trainNo: "103",
      origin: {
        station: "mysore",
        start: "8:30",
        distance: 0,
      },
      intermediate: [
        {
          station: "kr nagara",
          end: "9:00",
          start: "9:05",
          distance: 30,
        },
        {
          station: "berya",
          end: "9:35",
          start: "9:40",
          distance: 60,
        },
        {
          station: "holenarsipura",
          end: "10:10",
          start: "10:15",
          distance: 90,
        },
        {
          station: "hassan",
          end: "10:45",
          start: "10:50",
          distance: 120,
        },
      ],
      destination: {
        station: "arsikere",
        end: "11:30",
        distance: 160,
      },
    },
    {
      _id: "6453e0a22e9108b5d38f07d2",
      trainNo: "104",
      origin: {
        station: "mysore",
        start: "10:30",
        distance: 0,
      },
      intermediate: [
        {
          station: "kr nagara",
          end: "11:00",
          start: "11:05",
          distance: 30,
        },
        {
          station: "berya",
          end: "11:35",
          start: "11:40",
          distance: 60,
        },
        {
          station: "holenarsipura",
          end: "12:10",
          start: "12:15",
          distance: 90,
        },
        {
          station: "hassan",
          end: "12:45",
          start: "12:50",
          distance: 120,
        },
      ],
      destination: {
        station: "arsikere",
        end: "13:30",
        distance: 160,
      },
    },
    {
      _id: "6453e0a242b711a47f32ceaa",
      trainNo: "105",
      origin: {
        station: "mysore",
        start: "12:30",
        distance: 0,
      },
      intermediate: [
        {
          station: "kr nagara",
          end: "13:00",
          start: "13:05",
          distance: 30,
        },
        {
          station: "berya",
          end: "13:35",
          start: "13:40",
          distance: 60,
        },
        {
          station: "holenarsipura",
          end: "14:10",
          start: "14:15",
          distance: 90,
        },
        {
          station: "hassan",
          end: "14:45",
          start: "14:50",
          distance: 120,
        },
      ],
      destination: {
        station: "arsikere",
        end: "15:30",
        distance: 160,
      },
    },
  ]);
  const [startStation, setStartStation] = useState();
  const [endStation, setEndStation] = useState();
  const [distance, setDistance] = useState(0);
  const [searchStation, setSearchStation] = useState([]);
  const [startSearch, setStartSearch] = useState(false);

  const findTrain = (e, startStation, endStation) => {
    const start = () => {
      let x = newData.filter((e) => e.origin.station.includes(startStation));

      let y = newData.filter((e) => {
        for (let i = 0; i < e.intermediate.length; i++) {
          if (e.intermediate[i].station.includes(startStation) == true) {
            return true;
          }
        }
      });
      return [...x, ...y];
    };

    let arr = start();

    const end = () => {
      let a = arr.filter((e) => e.destination.station.includes(endStation));

      let b = arr.filter((e) => {
        for (let i = 0; i < e.intermediate.length; i++) {
          if (e.intermediate[i].station.includes(endStation) == true) {
            return true;
          }
        }
      });

      return [...a, ...b];
    };

    let ar = end();

    const journey = () => {
      let dist1 = 0;
      let dist2 = 0;
      let p = ar.filter((e) => {
        if (
          e.origin.station !== startStation ||
          e.destination.station !== endStation
        ) {
          for (let i = 0; i < e.intermediate.length; i++) {
            if (e.intermediate[i].station == startStation) {
              dist1 = e.intermediate[i].distance;
            }
            if (e.intermediate[i].station == endStation) {
              dist2 = e.intermediate[i].distance;
            }
          }
          console.log(dist1, dist2);
          if (dist1 < dist2) {
            return true;
          }
        } else {
          dist2 = e.destination.distance;
          return true;
        }
      });
      if (dist1 < dist2) {
        setDistance(dist2 - dist1);
      }
      return p;
    };

    let arr1 = journey();

    setSearchStation(arr1);
    setStartSearch(true);

    e.preventDefault();
  };

  const startTime = (e) => {
    let a = e.origin.start;
    if (e.origin.station !== startStation) {
      for (let i = 0; i < e.intermediate.length; i++) {
        if (e.intermediate[i].station == startStation) {
          a = e.intermediate[i].start;
        }
      }
    }
    return a;
  };

  const endTime = (e) => {
    let a = e.destination.end;
    if (e.origin.station !== endStation) {
      for (let i = 0; i < e.intermediate.length; i++) {
        if (e.intermediate[i].station == endStation) {
          a = e.intermediate[i].end;
        }
      }
    }
    return a;
  };

  return (
    <div className="App">
      <h1>FIND YOUR JOURNEY</h1>
      <div className="header">
        <h3>From Station:</h3>
        <select
          name="startStation"
          id="startStation"
          className="input"
          onChange={(e) => setStartStation(e.target.value)}
        >
          <option>From</option>
          <option value={"bengaluru"}>Bengaluru</option>
          <option value={"mysore"}>Mysore</option>
          <option value={"hassan"}>Hassan</option>
          <option value={"arsikere"}>Arsikere</option>
          <option value={"kunigal"}>Kunigal</option>
          <option value={"cr pattana"}>CR pattana</option>
          <option value={"kr nagara"}>KR nagara</option>
          <option value={"berya"}>berya</option>
          <option value={"shanthigrama"}>Shanthigrama</option>
          <option value={"holenarsipura"}>Holenarsipura</option>
          <option value={"nelamangala"}>Nelamangala</option>
        </select>
        <h3>To Station:</h3>
        <select
          name="startStation"
          id="startStation"
          className="input"
          onChange={(e) => setEndStation(e.target.value)}
        >
          <option>To</option>
          <option value={"bengaluru"}>Bengaluru</option>
          <option value={"mysore"}>Mysore</option>
          <option value={"hassan"}>Hassan</option>
          <option value={"arsikere"}>Arsikere</option>
          <option value={"kunigal"}>Kunigal</option>
          <option value={"cr pattana"}>CR pattana</option>
          <option value={"kr nagara"}>KR nagara</option>
          <option value={"berya"}>berya</option>
          <option value={"shanthigrama"}>Shanthigrama</option>
          <option value={"holenarsipura"}>Holenarsipura</option>
          <option value={"nelamangala"}>Nelamangala</option>
        </select>
        <br></br>
        <button onClick={(e) => findTrain(e, startStation, endStation)}>
          search
        </button>
      </div>
      <hr></hr>
      <div>
        <table className="tableHead">
          <thead>
            <tr>
              <th className="headRow">TRAIN NO</th>
              <th className="headRow">ORIGIN</th>
              <th className="headRow">DESTINATION</th>
              <th className="headRow">FROM</th>
              <th className="headRow">START AT</th>
              <th className="headRow">TO</th>
              <th className="headRow">REACH AT</th>
              <th className="headRow">DISTANCE</th>
              <th className="headRow">PPRICE</th>
            </tr>
          </thead>

          <tbody>
            {startSearch ? (
              searchStation.length > 0 ? (
                searchStation?.map((e) => (
                  <tr key={e.trainNo}>
                    <td className="headRow">{e.trainNo}</td>
                    <td className="headRow">{e.origin.station}</td>
                    <td className="headRow">{e.destination.station}</td>
                    <td className="headRow">{startStation}</td>
                    <td className="headRow">{startTime(e)}</td>
                    <td className="headRow">{endStation}</td>
                    <td className="headRow">{endTime(e)}</td>
                    <td className="headRow">{`${distance} kms`}</td>
                    <td className="headRow">{`Rs. ${distance * 1.25}`}</td>
                  </tr>
                ))
              ) : (
                <tr className="headrow">No Result Found</tr>
              )
            ) : (
              <tr className="headrow">Start Search To Find Your Journy</tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
