import headphoneIcon from "../assets/headphone_icon.png";

function ChoiceButtons({ choices, onSelect }) {
  return (
    <div className="choices">
      <h2 className="choices-title">
        Botões de Escolha
      </h2>

      <p className="choices-subtitle">
        — PRESSIONE SE OUSAR —
      </p>

      {choices.map((choice) => (
        <button
          key={choice.next}
          onClick={() => onSelect(choice.next)}
        >
          <img src={headphoneIcon} className="choice-icon"/>
          <span>{choice.text}</span>
        </button>
      ))}

      <p className="choices-warning">
        NÃO HÁ RETORNO DEPOIS DE CLICAR
      </p>
    </div>
  );
}

export default ChoiceButtons;