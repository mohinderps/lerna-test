const DEFAULT_CARD_FORMAT = /(\d{1,4})/g;

const formats = [
    {
      type: 'american-express',
      format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
    },
    {
      type: 'hipercard',
      format: DEFAULT_CARD_FORMAT,
    },
    {
      type: 'dinersclub',
      format: DEFAULT_CARD_FORMAT,
    },
    {
      type: 'discover',
      format: DEFAULT_CARD_FORMAT,
    },
    {
      type: 'jcb',
      format: DEFAULT_CARD_FORMAT,
    },
    {
      type: 'maestro',
      format: DEFAULT_CARD_FORMAT,
    },
    {
      type: 'mastercard',
      format: DEFAULT_CARD_FORMAT,
    },
    {
      type: 'unionpay',
      format: DEFAULT_CARD_FORMAT,
    },
    {
      type: 'elo',
      format: DEFAULT_CARD_FORMAT,
    },
    {
      type: 'visa',
      format: DEFAULT_CARD_FORMAT,
    }
  ];

export const maskNumber = (cardNumber, card) => {
  const formattedNumber = formatCardNumber(cardNumber, card);
  const formattedNumberArr = formattedNumber.split(' ');
  return formattedNumberArr.map((n, index) => {
    if(index === 0 || index === formattedNumberArr.length - 1) {
      return n; 
    }
    return n.split('').map(_ => 'X').join('');
  }).join(' ');
}

export const formatCardNumber = (cardNumber, card) => {
    if (!card) {
        return cardNumber
    };
    const formatObject = formats.find(f => f.type === card.type);
    if(!formatObject) {
        return cardNumber;
    }
    const {format} = formatObject;
    if (format.global) {
      return cardNumber.match(format).join(' ');
    }
    const execResult = format.exec(cardNumber.split(' ').join(''));
    if (execResult) {
      return execResult
        .splice(1, 3)
        .filter(x => x)
        .join(' ');
    }
    return cardNumber;
  };

export const rawNumber = cardNumber => cardNumber.replace(/\s/g, '');