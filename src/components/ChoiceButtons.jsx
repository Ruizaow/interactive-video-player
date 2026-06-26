function ChoiceButtons({ choices, onSelect }) {
  return (
    <div className="choices">
      {choices.map((choice) => (
        <button
          key={choice.next}
          onClick={() => onSelect(choice.next)}
        >
          {choice.text}
        </button>
      ))}
    </div>
  );
}

export default ChoiceButtons;