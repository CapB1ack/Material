class ModalDialController {
  constructor($mdDialog) {
    'ngInject';
    this.$mdDialog = $mdDialog;
    this.sports = [
      {
        type: 'бег',
        category: [
          '100-метровочка',
          '1 километр',
          '3 километра',
          '3 километра в химзащите',
          '10 километров в противогазе',

        ]
      },
      {
        type: 'плавание',
        category: [
          'брасс',
          'на спине',
          'кроль',
          'медленно',
        ]

      },
      {
        type: 'биатлон',
        category: [
          'эстафета',
          'спринт',
          'на выживание',
          'командный',
        ]
      },
      {
        type: 'стрельба',
        category: [
          'по мишени',
          'в биатлоне',
          'на выживание',
          'ради удовольствия',
        ]


      },
      {
        type: 'шашки',
        category: [
          'быстрые',
          'поддавки',
          'на выживание',
          'на щелбаны',
        ]
      }
    ];
    this.templates = [
      {
        when: '3:08PM',
        notes: "супер-тренировка",
        comment: 'комментарий'
      },
      {
        when: '5:08PM',
        notes: "так себе тренировка, устал",
        comment: 'комментарий'
      },
      {
        when: '6:08PM',
        notes: "тренировкаааааааааааа",
        comment: 'комментарий'
      },
      {
        when: '7:08PM',
        notes: "прогулял и пил пивас в падике",
        comment: 'комментарий'
      },
    ];
    this.ActivityType = false;
    this.ActivityKind = false;
    this.ActivityKindSwitch = false;
    this.act_p = 1;
  }

  sendData(data) {
    this.onData({data: data})
  }

  move(direction) {
    direction ? this.act_p++ : this.act_p--;

  }

  showActivityType(sport, categories, direction = undefined) {
    direction ? this.act_p++ : this.act_p--;
    this.sel_sport = sport;
    this.sel_cat = categories;
    this.ActivityType = true;
  }

  showActivityKind(item, direction = undefined) {
    direction ? this.act_p++ : this.act_p--;
    this.ActivityKind = true;
    this.sel_kind = item;
    console.log('-->>', this.sel_cat, '-', this.sel_sport,'-', this.sel_kind)
  }

  hide() {
    this.$mdDialog.hide();
  };

  cancel() {
    this.$mdDialog.cancel();
  };

  answer(answer) {
    this.$mdDialog.hide(answer);
  };
}

export default ModalDialController;
