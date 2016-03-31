export default function () {
    this.transition(
        this.fromRoute('index'),
        this.toRoute('game'),
        this.use('toLeft')
    );

    this.transition(
        this.fromRoute('game'),
        this.toRoute('index'),
        this.use('toRight')
    );
}
