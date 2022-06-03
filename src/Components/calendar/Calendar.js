import './Calendar.css'
function Calendar(){
    return(
        <div className="container">
            <div className="calendar">
                <div className="month">
                    <i class="fa-solid fa-arrow-left"></i>
        
                <div className="date">
                <h2>June</h2>
                    <p>Fri June 03, 2022</p>
                </div>
                <i class="fa-solid fa-arrow-right"></i>
                </div>
                <div className="weekdays">
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wend</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                    <div>Sun</div>
                </div>
                <div className="days">
                    <div className="prev-date">31</div>
                    <div className="prev-date">01</div>
                    <div className="prev-date">02</div>
                    <div className="prev-date">03</div>
                    <div className="prev-date">04</div>
                    <div>1</div>
                    <div>2</div>
                    <div className="today">3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>10</div>
                    <div>11</div>
                    <div>12</div>
                    <div>13</div>
                    <div>14</div>
                    <div>15</div>
                    <div>16</div>
                    <div>17</div>
                    <div>18</div>
                    <div>19</div>
                    <div>20</div>
                    <div>21</div>
                    <div>22</div>
                    <div>23</div>
                    <div>24</div>
                    <div>25</div>
                    <div>26</div>
                    <div>27</div>
                    <div>28</div>
                    <div>29</div>
                    <div>30</div>
                    <div>31</div>
                    <div className="next-date">05</div>
                    <div className="next-date">06</div>
                    <div className="next-date">07</div>
                    <div className="next-date">08</div>
                    <div className="next-date">09</div>


                </div>
            </div>
        </div>
    )

}
export default Calendar;