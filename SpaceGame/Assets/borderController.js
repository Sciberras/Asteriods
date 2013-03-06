#pragma strict
static var topMost:float;
static var bottomMost:float;
static var leftMost:float;
static var rightMost:float;

function Start () {

}

function Update () {
	//calculate screen borders
	leftMost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).x;
	rightMost = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,0,0)).x;
	
	topMost = Camera.main.ScreenToWorldPoint(Vector3(0,Screen.height,0)).y;
	bottomMost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).y; 
}