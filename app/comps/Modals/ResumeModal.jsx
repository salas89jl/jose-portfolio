import React from 'react'
import { Button, Modal } from 'flowbite-react'

export default function ResumeModal ({ openModal1, setOpenModal1 }) {
  return (
    <>
    
      <Modal dismissible show={openModal1} onClose={() => setOpenModal1(false)}>
        <Modal.Header>Hey There</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              You are being redirected to my resume. Are you sure you want to continue?
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:f1e22db7-6e35-41ee-ba55-991a21e31100">
            I accept
          </Button>
          <Button color="gray" onClick={() => setOpenModal1(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
