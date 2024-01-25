import {
    BsFillEmojiHeartEyesFill, 
    BsFillEmojiSmileFill, 
    BsEmojiNeutralFill, 
    BsFillEmojiFrownFill
} from "react-icons/bs"

import './ReviewForm.css'

export default function ReviewForm() {
    return (
        <div className='review-form'>
            <div className="form-control score-container">

                <label className='radio-container'>
                    <input type="radio" value="unsatisfied" name='review' required/>
                    <BsFillEmojiFrownFill />
                    <p>Insastifeito</p>
                </label>

                <label className='radio-container'>
                    <input type="radio" value="neutral" name='review' required/>
                    <BsEmojiNeutralFill />
                    <p>Poderia ser melhor</p>
                </label>

                <label className='radio-container'>
                    <input type="radio" value="satisfied" name='review' required/>
                    <BsFillEmojiSmileFill />
                    <p>Satisfeito</p>
                </label>

                <label className='radio-container'>
                    <input type="radio" value="very_satisfield" name='review' required/>
                    <BsFillEmojiHeartEyesFill />
                    <p>Muito satisfeito</p>
                </label>
            </div>
            <div className="form-control">
                <label htmlFor="comment">Comentário:</label>
                <textarea name="comment" 
                id="comment" 
                placeholder="Conte como foi sua experiência com o produto..." 
                required
                ></textarea>
            </div>
        </div>
    )
}
