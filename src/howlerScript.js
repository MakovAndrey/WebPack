export function playBellSound() {
    const sound = new Howl({
        src: ["./sounds/bell-sound.mp3"],
    });
    return sound.play();
}