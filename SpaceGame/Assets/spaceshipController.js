#pragma strict
var speed:int;
var normal:int;
var nitro:int;

function Start () {

}

function Update () {
	speed=normal;
	if(Input.GetKey(KeyCode.Space))
	{
		
		speed=nitro;
		
	}
	
	transform.Translate(Vector3.up * speed * Time.deltaTime * Input.GetAxis("Vertical"));
	transform.Rotate(Vector3.back *30* speed * Time.deltaTime * Input.GetAxis("Horizontal"));
	
	if(transform.position.y > borderController.topMost)
	{
		transform.position.y = borderController.bottomMost;
	}
	
	
	if(transform.position.y < borderController.bottomMost)
	{
		transform.position.y = borderController.topMost;
	}
	
	
	if(transform.position.x < borderController.leftMost)
	{
		transform.position.x = borderController.rightMost;
	}
	
	
	if(transform.position.x > borderController.rightMost)
	{
		transform.position.x = borderController.leftMost;
	}
	

}

