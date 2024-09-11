declare class ScreenObject extends Object {
    /**
     * Pixel position of the left side of the screen in global coordinates.
     */
    readonly left: number;
    /**
     * Pixel position of the top side of the screen in global coordinates.
     */
    readonly top: number;
    /**
     * Pixel position of the right side of the screen in global coordinates.
     */
    readonly right: number;
    /**
     * Pixel position of the bottom side of the screen in global coordinates.
     */
    readonly bottom: number;

    /**
     * True if the screen describes the primary display.
     */
    readonly primary: boolean;
}